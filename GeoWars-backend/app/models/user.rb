class User < ApplicationRecord
    has_many :scores

    has_secure_password
    
    validates :username, presence: true
    validates :username, uniqueness: true, on: :create
    validates :password, length: {in:6..20}
    
end
