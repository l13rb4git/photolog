class PicsController < ApplicationController
  before_action :find_pic, only: [:show, :edit, :update, :destroy]

  def index
    @pics = Pic.all.order("created_at DESC")
  end

  def show
  end

  def new
    @pic = Pic.new
  end

  def create
    @pic = Pic.new(pic_params)

    if @pic.save
      redirect_to @pic, notice: "A new photo was added!"
    else
      render :new
    end
  end

  def edit
    
  end

  def update
    if @pic.update(pic_params)
      redirect_to @pic, notice: "Congrats! Pic was updated."
    else
      render :edit
    end
  end


  private

    def pic_params
      params.require(:pic).permit(:title, :description)
    end

    def find_pic
      @pic = Pic.find_by(id: params[:id])
    end
end
