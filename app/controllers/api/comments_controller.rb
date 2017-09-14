class Api::CommentsController < ApplicationController
before_action :authenticate_user!

def index
  movie = Movie.find_by(api_id: params[:movie_id])
  @comments = Comment.where(movie_id: movie.id)
  render json: @comments
end

def create
  request_body = JSON.parse(request.body.read)
  movie_id = Movie.find_by!(api_id: request_body['movie_id']).id
  user_id = current_user.id
  comment_from_request = request_body['comment']
  @comment = Comment.new(
    movie_id: movie_id,
    user_id: user_id,
    title: comment_from_request['title'],
    body: comment_from_request['body']
    )
    if(@comment.save)
      render json: @comment
    else
      puts
      render status:500, json: {
        "message": @comment.errors
      }
    end
end
#
# def show
#   @movie = Movie.find(['api_id'])
#   @comment = @movie.comment
#   render json: @comment
#
# end
#
# def update
#   @movie = Movie.find(params[:movie_id])
#   @comment = Comment.find(params[:id])
#   @comment.update(comment_params)
#   redirect_to api_movie_path(@movie)
# end

def destroy
end

  private

  def comment_params
      comment = params.require(:comment).permit(:body, :title)
      comment.merge(user_id: current_user.id)
  end
end
