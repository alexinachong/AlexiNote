class Notebook < ApplicationRecord
  validates :title, null: false
  validates :title, uniqueness: { scope: :user_id }

  # ADD associations
  belongs_to :user
  has_many :notes 

end
