class OrdersController < ApplicationController
  def index
    render json: Order.all
  end

  def create
    order = Order.new(order_params)
    status = order.save ? 200 : 422

    render json: order, status: status
  end

  def update
    order = Order.find(params[:id])
    status = order.update_attributes(order_params) ? 200 : 422

    render json: order, status: status
  end

  def destroy
    Order.destroy(params[:id])

    render json: {success: true}, status: 200
  end


  private

  def order_params
    params.permit(:user_id, :total, :notes)
  end
end