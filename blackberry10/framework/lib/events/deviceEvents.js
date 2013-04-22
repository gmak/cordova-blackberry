/*
 * Copyright 2010-2011 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = {
    addEventListener: function (event, trigger) {
        if (event) {
            event = "device." + event;
            window.wp.device.on(event, trigger);
        } else {
            console.warn("Attempting to register for 'falsey' event: " + event);
        }
    },
    removeEventListener: function (event, trigger) {
        if (event) {
            event = "device." + event;
            window.wp.device.un(event, trigger);
        } else {
            console.warn("Attempting to un-register for 'falsey' event: " + event);
        }
    }
};
