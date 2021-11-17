class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :session_token
end
