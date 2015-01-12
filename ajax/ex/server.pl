#!/usr/bin/env perl
use Mojolicious::Lite;
use List::MoreUtils qw/any/;
use List::Util qw/shuffle/;

hook(before_dispatch => sub {
		my $c = shift;
		$c->res->headers->header( 'Access-Control-Allow-Origin' => '*' );
});

post '/ex1/login' => sub {
	my $c = shift;
	my $user = $c->param('username');
	my $password = $c->param('password');
	my $res =  ($user eq 'admin' && $password eq 'admin');

	$c->render(json => {ok => $res});
};

get '/ex2/user' => sub {
	shift->render(json => {
			name        => 'Jim',
			age         => 77,
			gender      => 'm',
			eyes        => 'green',
	})
};

get '/ex3/user' => sub {
	shift->render(json => {
			name    => { first => 'Jim', last => 'Adams' },
			age     => 11,
			address => { country => 'Israel', city => 'Eilat' },
			likes   => ['sports', 'surfing']
	});
};

my $ex4_data = {name => 'Mike', age => 20, eyes => 'green' };

get '/ex4/user' => sub {
	shift->render(json => $ex4_data);
};

post '/ex4/user' => sub {
	my $c = shift;
	my $name = $c->param('name');
	my $age = $c->param('age');
	my $eyes = $c->param('eyes');

	$ex4_data->{name} = $name if $name;
	$ex4_data->{age}  = $age if $age;
	$ex4_data->{eyes} = $eyes if any { $_ eq $eyes } ('green', 'blue', 'brown');
	$c->render(json => {ok => 1});
};

get '/ex5/colors' => sub {
	my $c = shift;
	$c->render(json => [shuffle qw/red blue green yellow white magenta orange/]);
};

my @score;
post '/ex6/score' => sub {
	my $c = shift;
	my $name = $c->param('name');
	my $hs = $c->param('score');
	die "Missing Arguments" if !$name || ! $hs;
	push @score, {name => $name, score => $hs};
	$c->render(json => {ok=>1});
};

get '/ex6/top10' => sub {
	shift->render(json => [(sort {$b->{score} <=> $a->{score}} @score)[0..10]]);
};

app->start;
