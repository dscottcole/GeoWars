class UsersController < ApplicationController

    # before_action :get_user, only: []

    def index 
        @users = User.all
        render json: @users.to_json(
            only: [:id, :username],
            include: {
                scores: {
                    only: [:id, :score, :time_alive, :accuracy, :user_id]
                }
            }
        )
    end

    def show
        # @user = User.find(params[:id])
        render json: @user.to_json
    end

    def create 
        User.create(user_params)
    end

    def login
    end

    def verify
        @user = User.find_by(username: user_params[:username])
        
        if @user && @user.authenticate(user_params[:password])
            render json: @user.to_json
            #     only: [:id, :username]
            # )
        else
            render :json => {"message": "This username & password combination is invalid. Create an account or try again."}
        end
    end
    
    def logout
        
    end
    

    private

    def get_user
        @user = User.all.find_by(id: params[:id])
    end

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end
end
