require 'sinatra'
require 'json'

set :public_folder, File.dirname(__FILE__) + "/static"

post '/ex1/login' do
    user = params[:username]
    pwd  = params[:password]

    return (user == 'ali' && pwd == 'baba').to_s
end

get '/ex2/user' do
    content_type :json
    return {
        :name   => 'Jim',
        :age    => 77,
        :gender => 'm',
        :eyes   => 'Green',
    }.to_json
end

get '/ex3/user' do
    content_type :json
    return {
        :name => { :first => 'Jim', :last => 'Jones' },
        :age  => 11,
        :address => { :country => 'Israel', :city => 'Eilat' },
        :likes   => ['sports', 'surfing'],
    }.to_json
end

ex4data = {
    :name => 'Mike',
    :age  => 20,
    :eye  => 'Green',
}

get '/ex4/user' do
    content_type :json
    return ex4data.to_json
end

post '/ex4/user' do
    content_type :json
    name = params[:name]
    age  = params[:age]
    eye  = params[:eye]

    ex4data[:name] = name       if name
    ex4data[:age]  = Float(age) if age
    ex4data[:eye]  = eye        if ['Green','Blue','Brown'].include?(eye)
end

get '/ex5/colors' do
    content_type :json
    return %w{red blue green yellow white magenta orange}.sort_by { rand }.to_json
end

score = []

post '/ex6/score' do
    content_type :json
    name = params[:name]
    hs   = params[:score]

    raise 'Missing Arguments' if ! name || ! hs

    score.push({
        :player => name,
        :score  => hs,
    })

    logger.info(score)
end

get '/ex6/top10' do
    content_type :json
    return score.sort { |a,b| a[:score] <=> b[:score] }[0..10].to_json
end
