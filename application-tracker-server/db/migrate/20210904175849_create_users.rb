class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    enable_extension :citext

    create_table :users do |t|
      t.citext :users, null: false
      t.citext :email, null: false, unique: true
      t.string :password_digest, null: false
      t.timestamps
    end
  end
end
