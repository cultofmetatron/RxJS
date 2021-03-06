    /**
     * Class to create an Observer instance from delegate-based implementations of the on* methods.
     */
    var AnonymousObserver = Rx.AnonymousObserver = (function (_super) {
        inherits(AnonymousObserver, _super);

        /**
         * Creates an observer from the specified OnNext, OnError, and OnCompleted actions.
         * 
         * @constructor
         * @param {Any} onNext Observer's OnNext action implementation.
         * @param {Any} onError Observer's OnError action implementation.
         * @param {Any} onCompleted Observer's OnCompleted action implementation.  
         */      
        function AnonymousObserver(onNext, onError, onCompleted) {
            _super.call(this);
            this._onNext = onNext;
            this._onError = onError;
            this._onCompleted = onCompleted;
        }

        /**
         * Calls the onNext action.
         * 
         * @memberOf AnonymousObserver
         * @param {Any} value Next element in the sequence.   
         */     
        AnonymousObserver.prototype.next = function (value) {
            this._onNext(value);
        };

        /**
         * Calls the onError action.
         * 
         * @memberOf AnonymousObserver
         * @param {Any{ error The error that has occurred.   
         */     
        AnonymousObserver.prototype.error = function (exception) {
            this._onError(exception);
        };

        /**
         *  Calls the onCompleted action.
         *
         * @memberOf AnonymousObserver
         */        
        AnonymousObserver.prototype.completed = function () {
            this._onCompleted();
        };

        return AnonymousObserver;
    }(AbstractObserver));
