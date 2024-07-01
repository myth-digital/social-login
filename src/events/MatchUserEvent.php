<?php
namespace verbb\sociallogin\events;

use verbb\sociallogin\base\Provider;

use craft\elements\User;
use craft\events\CancelableEvent;

use verbb\auth\models\UserProfile;

class MatchUserEvent extends CancelableEvent
{
    // Properties
    // =========================================================================

    public string $matchUserSource = null;

    public string $matchUserDestination = null;

    public ?UserProfile $userProfile = null;
    public ?Provider $provider = null;

    public ?User $user = null;
}
