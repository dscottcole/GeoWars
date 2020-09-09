class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores do |t|
      t.integer :score
      t.float :time_alive
      t.float :accuracy
      t.integer :user_id

      t.timestamps
    end
  end
end
