#!/usr/bin/perl
use strict;
use warnings;
my $data = do { local $/; open my $fh, "<", "/home/drarmank/public_html/assets/index-DJeWhCy-.js" or die $!; <$fh> };
print "size: ", length($data), "\n";
my @markers = ("upsertPatient","createPatient","medicare_patients","phpAuthToken","sync.php",".php","fetch(","localStorage","medicare_sync_queue","canister","actor","apiClient","patients/create","/api/patients","registerPatient","savePatient");
for my $m (@markers) {
    my $c = () = $data =~ /\Q$m\E/g;
    print "$m: $c\n";
}
my $ZERO = chr(48);
print "\n=== first upsertPatient ctx ===\n";
my $pos = index($data, "upsertPatient");
if ($pos >=  + ) { my $s = $pos - 300; $s =  if $s < ; print substr($data, $s, 800), "\n"; }
print "\n=== first createPatient ctx ===\n";
$pos = index($data, "createPatient");
if ($pos >=  + ) { my $s = $pos - 300; $s =  if $s < ; print substr($data, $s, 800), "\n"; }
print "\n=== first medicare_patients ctx ===\n";
$pos = index($data, "medicare_patients");
if ($pos >=  + ) { my $s = $pos - 200; $s =  if $s < ; print substr($data, $s, 600), "\n"; }
print "\n=== phpAuthToken ctx ===\n";
$pos = index($data, "phpAuthToken");
if ($pos >=  + ) { my $s = $pos - 200; $s =  if $s < ; print substr($data, $s, 500), "\n"; } else { print "NOT FOUND\n"; }
