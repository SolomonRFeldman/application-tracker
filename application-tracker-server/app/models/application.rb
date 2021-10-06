class Application < ApplicationRecord
  belongs_to :user

  enum status: {accepted: 'accepted', declined: 'declined', pending: 'pending'}

  validates :status, presence: true
  validates :organization_name, presence: true
  validates :purpose, presence: true
end