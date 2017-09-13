class CommentsController < ApplicationController

  def new
    @movie = Movie.find(params[:movie_id])
    @comment = @movie.comments.new
  end

  def create
      @movie = Movie.find(params[:id])
      @comment = @movie.comments.create(comment_params)
      if(@comment.valid? and @comment.save)
        redirect_to movie_path
        else
          flash[:alert] = "Unsuccessful Post"
          redirect_to movie_path
      end
  end

  def edit
    @comment = Comment.find(params[:id])
  end

  def update
    @movie = Movie.find(params[:movie_id])
    @comment = Comment.find(params[:id])
    @comment.update(comment_params)
    redirect_to movie_path(@movie)
  end

    private

    def comment_params
        comment = params.require(:comment).permit(:body, :title)
        comment.merge(user_id: current_user.id, movie_id: params[:id])
    end
end

end
