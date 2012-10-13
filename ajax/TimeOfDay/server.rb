require 'sinatra'
require 'json'

set :public_folder, File.dirname(__FILE__) + "/static"

get '/' do
  redirect to('/index.html');
end

get '/tod' do
  now = Time.new
  content_type :json
  
  return {
    'time'  => now.to_s,
    'year'  => now.year,
    'month' => now.month,
    'day'   => now.day,
    'hour'  => now.hour,
    'min'   => now.min,
    'sec'   => now.sec}.to_json
end

