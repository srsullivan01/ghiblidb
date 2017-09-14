class Api::MoviesController < ApplicationController
  #index
  def index
    @movies = Movie.all
    render json: @movies
  end

  #create
  def create
    @movie = Movie.create!(movie_params)
    redirect_to api_movie_path(@movie)
  end

  #show
  def show
    @movie = Movie.find(params[:id])
    @comments = @movie.comments.all
    @characters = @movie.characters.all
    render json: {
      movie: @movie,
      character: @character
    }
  end

  #update
  def update
    @movie = Movie.find(params[:id])
    @movie.update!(movie_params)
    redirect_to api_movie_path(@movie)
  end

  #destroy
  def destroy
    @movie = Movie.find(params[:id])
    @movie.destroy
    redirect_to api_movies_path
  end

#params
  private
  def movie_params
    params.require(:movie).permit(:title, :description)
  end
end
