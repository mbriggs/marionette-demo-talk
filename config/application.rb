require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module MarionetteTableExample
  class Application < Rails::Application
    config.assets.paths << Rails.root.join('vendor', 'components')
    config.active_record.schema_format = :sql
  end
end
