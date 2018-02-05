class Api::NotebooksController < ApplicationController

  before_action :require_logged_in

  def index
    @notebooks = current_user.notebooks

    render :index
  end

  def show
    @notebook = current_user.notebooks.find_by(id: params[:id])

    render :show
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.user_id = current_user.id

    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages
    end
  end

  def update
    @notebook = current_user.notebooks.find_by(id: params[:id])

    if @notebook.update(notebook_params)
      render :show
    else
      render json: @notebook.errors.full_messages
    end
  end

  def destroy
    @notebook = current_user.notebooks.find_by(id: params[:id])

    @notebook.destroy

    # We render show so the store can get the id to delete it
    render :show
  end

  private

  def notebook_params
    params.require(:notebook).permit(:title)
  end

end
