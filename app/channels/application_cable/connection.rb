module ApplicationCable
  class Connection < ActionCable::Connection::Base
      identified_by :current_user

      def connect
          p params
          self.current_user = params[:id]
      end
  end
end
