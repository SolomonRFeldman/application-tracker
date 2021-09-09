class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true

  validates :email, presence: true
  validates :email, uniqueness: { case_sensative: false }

  def session_info
    self.attributes.slice('username')
  end

end