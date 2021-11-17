class User < ApplicationRecord
    has_one :lendee

    validates :username, :password_digest, :session_token, presence: true

    validates :username, uniqueness: true, length: { maximum: 30 }

    before_validation :ensure_session_token # This will create a session token if it doesn't already exist, private method further down

    def password=(password) # This lets us access our password later
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password) # If this hash and the hash from the login action are the same/return true, then we know the password is right and we can go through
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
      
    def reset_session_token! # Reset session token; everytime the user logs in or logs out, this will reset the session token
        generate_session_token
        self.save!
        self.session_token
    end
    

    private
    
    def ensure_session_token # Look at line 6, this will create a session token if it already doesn't exist
        self.session_token ||= generate_session_token
    end
    
    def self.new_session_token # Using this inside of generate_session_token right under here, creates a new session token each time a user logs in/out
        SecureRandom.urlsafe_base64(64)
    end
    
    def generate_session_token 
        self.session_token = self.class.new_session_token # Invoke the method on line 30, set this new session_token to a new token|even though session tokens are random, users could potentially have the same ones somehow
        while User.find_by(session_token: self.session_token) # To make sure we don't have the same session_token as others, we're going to be looking for any User that has the same session token as the one we generate; we'll reset ours to a different UNTIL we have one that doesn't match anyone else's in our database
          self.session_token = self.class.new_session_token
        end
        self.session_token # Return our new session token!
    end

end