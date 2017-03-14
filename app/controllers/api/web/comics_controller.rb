module Api
  module Web
    class ComicsController < ActionController::Base

      def index
        unsorted_comics = Comic.all
        comics = unsorted_comics.sort_by &:issue_number
        render json: { comics: comics.map(&:serialized) }, status: :ok
      end

      def show
        comic = Comic.find(params[:id])
        render json: { comic: comic.serialized }, status: :ok
      end
    end
  end
end
