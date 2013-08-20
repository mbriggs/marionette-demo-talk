class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user, :total, :notes
end