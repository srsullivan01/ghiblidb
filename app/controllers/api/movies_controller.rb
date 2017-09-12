class Api::MoviesController < ApplicationController
  #index
  def index
    @movies = Movie.all
    render json: @movies
  end

  #create
  def create
    @movie = Movie.create!(movie_params)
    redirect_to movie_path(@movie)
  end

  #show
  def show
    @movie = Movie.find(params[:id])
    @characters = @movie.characters.all
    render json: {
      movie: @movie,
      characters: @characters
    }
  end

  #update
  def update
    @movie = Movie.find(params[:id])
    @movie.update!(movie_params)
    redirect_to movie_path(@movie)
  end

  #destroy
  def destroy
    @movie = Movie.find(params[:id])
    @movie.destroy
    redirect_to movies_path
  end

#params
  private
  def movie_params
    params.require(:movie).permit(:title, :description)
  end
end
