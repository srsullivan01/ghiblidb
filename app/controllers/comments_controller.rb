class CommentsController < ApplicationController
  # before_action :set_comment, only: [:show, :update, :destroy]
load_and_authorize_resource only: [:edit, :update, :destroy]
#GET /comments/new
def new
   @user = current_user
   @post = Post.new
 end

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments
  end

  # GET /comments/1
  def show
    @user = current_user
    @comment = Comment.find(params[:id])
  end

  # POST /comments
  def create
    @comment = @user.posts.build(comment_params)

    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:title, :content)
    end
end
