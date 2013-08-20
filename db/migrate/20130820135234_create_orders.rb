class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.decimal :total
      t.string :notes
      t.timestamps
    end
  end
end
