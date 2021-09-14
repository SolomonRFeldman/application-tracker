class CreateApplications < ActiveRecord::Migration[6.1]
  def change
    create_enum :status, %w(accepted declined pending)
    create_table :applications do |t|
      t.integer :user_id, null: false
      t.citext :organization_name, null: false
      t.citext :purpose, null: false
      t.datetime :date_applied
      t.text :url
      t.enum :status, enum_name: :status, null: false, default: "pending"
      t.timestamps
    end
  end
end
