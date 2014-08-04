#!/Users/ynonperek/perl5/perlbrew/perls/perl-5.16.3/bin/perl
use v5.16;

use Data::Dumper;
use Net::APNS;

my $APNS = Net::APNS->new;

my $notifier = $APNS->notify({
    cert   => "cert.pem",
    key    => "key.pem",
    passwd => "1234"
});

my ( $device_token ) = @ARGV;
die "missing device token" if ! $device_token;

$notifier->devicetoken($device_token);
$notifier->message("message");
$notifier->sound('default');
$notifier->custom({ custom_key => 'custom_value' });
$notifier->sandbox(1);

$notifier->write;

