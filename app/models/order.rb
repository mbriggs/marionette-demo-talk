class Order < ActiveRecord::Base
  belongs_to :user

  validates :user, presence: true
  validates :total, presence: true
end