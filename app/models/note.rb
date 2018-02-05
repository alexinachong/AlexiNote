class Note < ApplicationRecord
  validates :title, :description, null: false

  belongs_to :notebook 

end
