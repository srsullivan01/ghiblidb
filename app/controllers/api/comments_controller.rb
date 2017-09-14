class Api::CommentsController < ApplicationController
before_action :authenticate_user!

def index
  @movie = Movie.find(params[:movie_id])
  puts "COMMENTS"
  puts @movie
  puts @movie.comments
  @comments = @movie.comments.all
  render json: @comments
end

  def create
    puts current_user
      puts params[:movie_id]
      @movie = Movie.find_by! api_id: params[:movie_id]
      puts @movie.title
      @comment = @movie.comments.new(comment_params)
      puts @comment.body
      if(@comment.save)
        render json: @comment
      else
        puts
        render status:500, json: {
          "message": @comment.errors
        }
      end
  end

  def show
    @comments = @movie.comments.all
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
