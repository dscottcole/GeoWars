class ScoresController < ApplicationController
    
    def index 
        @scores = Score.all.sort_by {|game| game.score}.reverse
        render json: @scores.to_json(
            except: [:created_at, :updated_at],
            include: {
                user: {
                    only: [:username]
                }
            }
        )
    end

    def show 
        @score=Score.find(params[:id])
        render json: @score.to_json(
            except: [:created_at, :updated_at]
        )
    end

    def create
        @score = Score.create(score_params)

        render :json => {"message": "Your new score has been added to the scoreboard!"}
    end

    private

    def score_params
        params.require(:score).permit(:score, :time_alive, :accuracy, :user_id)
    end

end
