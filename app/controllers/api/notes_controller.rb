class Api::NotesController < ApplicationController

  before_action :require_logged_in

# do i need 2 index routes? One for all notes regardless of notebook
# and one for notes only in one notebook?
# this one will be for all notes regardless of notebook
  def index
    @notes = current_user.notes

    render :index
  end

  def notes_by_notebook
    @notebook = current_user.notebooks.find_by(id: params[:notebook_id])
    @notes = @notebook.notes if @notebook

    render :index
  end

  def show
    @note = current_user.notes.find_by(id: params[:id])

    render :show
  end

  def create
    @note = Note.new(note_params)

    if @note.update(note_params)
      render :show
    else
      render json: @note.errors.full_messages
    end
  end

  def destroy
    @note = current_user.notes.find_by(id: params[:id])

    @note.destroy

    render :show
  end

  private

  def note_params
    params.require(:note).permit(:title, :description)
  end

end
