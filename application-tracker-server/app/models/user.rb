class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true

  validates :email, presence: true
  validates :email, uniqueness: { case_sensative: false }

  def session_info
    attributes.slice('id', 'username')
  end

  class << self
    def authenticate(email: nil, password: nil)
      user = find_by(email: email)
      user if user&.authenticate(password)
    end
  end
end
