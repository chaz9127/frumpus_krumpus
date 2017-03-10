module Api
  module Web
    class ComicsController < ActionController::Base

      def index
        comics = Comic.all
        render json: { comics: comics.map(&:serialized) }, status: :ok
      end
    end
  end
end
