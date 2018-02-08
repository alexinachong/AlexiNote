require 'action_view'
require 'action_view/helpers'
include ActionView::Helpers::DateHelper

class Note < ApplicationRecord
  validates :title, :description, null: false

  belongs_to :notebook

  def time_ago
    distance_of_time_in_words(self.updated_at, Time.now)
  end

end
