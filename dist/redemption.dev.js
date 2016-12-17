(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * Copyright (c) 2016 Dzikoysk
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var RedemptionTemplate = require('./redemption_template.js');
var RedemptionContent = require('./redemption_content.js');
var RedemptionBuilder = require('./redemption_builder.js');

function Redemption() {
    this.content = new RedemptionContent();
}

Redemption.prototype.amen = function (parentElement) {
    var builder = new RedemptionBuilder(this.content);
    builder.prepare();
    builder.apply(parentElement);
};

Redemption.prototype.getContent = function () {
    return this.content;
};

module.exports = Redemption;

},{"./redemption_builder.js":2,"./redemption_content.js":3,"./redemption_template.js":4}],2:[function(require,module,exports){
/*
 * Copyright (c) 2016 Dzikoysk
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function RedemptionBuilder(content) {
    this.content = content;
}

RedemptionBuilder.prototype.prepare = function () {

};

RedemptionBuilder.prototype.apply = function (parentElement) {

};

module.exports = RedemptionBuilder;

},{}],3:[function(require,module,exports){
/*
 * Copyright (c) 2016 Dzikoysk
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function RedemptionContent() {
    this.elements = {};
}

RedemptionContent.prototype.add = function (element) {
    this.elements.push(element);
};

RedemptionContent.prototype.getElements = function () {
    return this.elements;
};

module.exports = RedemptionContent;

},{}],4:[function(require,module,exports){
/*
 * Copyright (c) 2016 Dzikoysk
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function RedemptionTemplate() {
    this.declarations = {};
}

RedemptionTemplate.prototype.declaration = function (declaration) {
    this.declarations.push(declaration);
    return this;
};

module.exports = RedemptionTemplate;

},{}]},{},[1]);
