json.set! notebook.id do
  json.extract! notebook, :id, :title, :user_id
  json.note_ids notebook.notes.pluck(:id)
end
