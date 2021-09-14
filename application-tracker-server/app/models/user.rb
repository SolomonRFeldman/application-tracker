class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true

  validates :email, presence: true
  validates :email, uniqueness: { case_sensative: false }

  def session_info
    self.attributes.slice('id', 'username')
  end
  
  class << self
  
    def authenticate(email: nil, password: nil)
      user = self.find_by(email: email)
      user if user && user.authenticate(password)
    end

  end

end