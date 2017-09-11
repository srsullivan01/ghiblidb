class Api::CharactersController < ApplicationController
  #index
  def index
    @characters = character.all
    render json: @characters
  end

  #create
  def create
    @character = character.create!(character_params)
    redirect_to character_path(@character)
  end

  #show
  def show
    @character = character.find(params[:id])
    render json: @character
  end

  #update
  def update
    @character = character.find(params[:id])
    @character.update!(character_params)
    redirect_to character_path(@character)
  end

  #destroy
  def destroy
    @character = character.find(params[:id])
    @character.destroy
    redirect_to characters_path
  end

#params
  private
  def character_params
    params.require(:character).permit(:name)
  end


end
