class User < ApplicationRecord
  has_secure_password

  validates :name, precence: true

  validates :email, precence: true
  validates :email, uniqueness: { case_sensative: false }

end