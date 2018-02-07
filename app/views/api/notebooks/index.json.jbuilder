@notebooks.each do |notebook|
  json.set! notebook.id do
    json.partial! 'notebook', notebook: notebook
    json.note_ids notebook.notes.pluck(:id)
  end
end
