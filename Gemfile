source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'activeadmin', '~> 1.0.0.pre4'
gem 'angular-rails-templates', '~> 1.0.2'
gem "awesome_print", require:"ap"
gem 'bourbon'
gem 'bower'
gem 'coffee-rails', '~> 4.2'
gem 'compass'
gem 'devise'
gem 'fog'
gem 'jbuilder', '~> 2.5'
gem 'jquery-rails'
gem 'jquery-ui-rails', '5.0.0'
gem 'neat'
gem "paperclip", "~> 5.0.0"
gem 'pg', '~> 0.18'
gem 'pry'
gem 'puma', '~> 3.0'
gem 'rails', '~> 5.0.1'
gem 'sass-rails', '~> 5.0'
gem 'susy'
gem 'turbolinks', '~> 5'
gem 'uglifier', '>= 1.3.0'

group :development, :test do
  gem 'better_errors'
  gem 'byebug', platform: :mri
  gem "binding_of_caller"
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
