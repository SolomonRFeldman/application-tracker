class User < ApplicationRecord
  has_secure_password

  validates :username, precence: true

  validates :email, precence: true
  validates :email, uniqueness: { case_sensative: false }

end