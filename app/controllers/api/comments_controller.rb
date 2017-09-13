class Api::CommentsController < ApplicationController
before_action :authenticate_user!
  def new
    @movie = Movie.find(params[:movie_id])
    @comment = @movie.comments.new
  end

  def create
      puts params[:movie_id]
      @movie = Movie.find_by! api_id: params[:movie_id]
      puts @movie.title
      @comment = @movie.comments.create(comment_params)
      if(@comment.valid? and @comment.save)
        render json: @comment
        else
          render json: {
            "message": "could not save comment"
          }
      end
  end

  def show
    @comments = @movie.comments.all
  end

  def edit
    @comment = Comment.find(params[:id])
  end

  def update
    @movie = Movie.find(params[:movie_id])
    @comment = Comment.find(params[:id])
    @comment.update(comment_params)
    redirect_to api_movie_path(@movie)
  end

    private

    def comment_params
        comment = params.require(:comment).permit(:body, :title)
        comment.merge(user_id: current_user.id)
    end
end
