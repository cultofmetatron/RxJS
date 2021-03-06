QUnit.module('Skip');

var Observable = Rx.Observable,
    TestScheduler = Rx.TestScheduler,
    SerialDisposable = Rx.SerialDisposable,
    onNext = Rx.ReactiveTest.onNext,
    onError = Rx.ReactiveTest.onError,
    onCompleted = Rx.ReactiveTest.onCompleted,
    subscribe = Rx.ReactiveTest.subscribe,
    created = Rx.ReactiveTest.created,
    subscribed = Rx.ReactiveTest.subscribed,
    disposed = Rx.ReactiveTest.disposed;

test('Skip_Complete_After', function () {
    var results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(70, 6), onNext(150, 4), onNext(210, 9), onNext(230, 13), onNext(270, 7), onNext(280, 1), onNext(300, -1), onNext(310, 3), onNext(340, 8), onNext(370, 11), onNext(410, 15), onNext(415, 16), onNext(460, 72), onNext(510, 76), onNext(560, 32), onNext(570, -100), onNext(580, -3), onNext(590, 5), onNext(630, 10), onCompleted(690));
    results = scheduler.startWithCreate(function () {
        return xs.skip(20);
    });
    results.messages.assertEqual(onCompleted(690));
    xs.subscriptions.assertEqual(subscribe(200, 690));
});

test('Skip_Complete_Same', function () {
    var results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(70, 6), onNext(150, 4), onNext(210, 9), onNext(230, 13), onNext(270, 7), onNext(280, 1), onNext(300, -1), onNext(310, 3), onNext(340, 8), onNext(370, 11), onNext(410, 15), onNext(415, 16), onNext(460, 72), onNext(510, 76), onNext(560, 32), onNext(570, -100), onNext(580, -3), onNext(590, 5), onNext(630, 10), onCompleted(690));
    results = scheduler.startWithCreate(function () {
        return xs.skip(17);
    });
    results.messages.assertEqual(onCompleted(690));
    xs.subscriptions.assertEqual(subscribe(200, 690));
});

test('Skip_Complete_Before', function () {
    var results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(70, 6), onNext(150, 4), onNext(210, 9), onNext(230, 13), onNext(270, 7), onNext(280, 1), onNext(300, -1), onNext(310, 3), onNext(340, 8), onNext(370, 11), onNext(410, 15), onNext(415, 16), onNext(460, 72), onNext(510, 76), onNext(560, 32), onNext(570, -100), onNext(580, -3), onNext(590, 5), onNext(630, 10), onCompleted(690));
    results = scheduler.startWithCreate(function () {
        return xs.skip(10);
    });
    results.messages.assertEqual(onNext(460, 72), onNext(510, 76), onNext(560, 32), onNext(570, -100), onNext(580, -3), onNext(590, 5), onNext(630, 10), onCompleted(690));
    xs.subscriptions.assertEqual(subscribe(200, 690));
});

test('Skip_Complete_Zero', function () {
    var results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(70, 6), onNext(150, 4), onNext(210, 9), onNext(230, 13), onNext(270, 7), onNext(280, 1), onNext(300, -1), onNext(310, 3), onNext(340, 8), onNext(370, 11), onNext(410, 15), onNext(415, 16), onNext(460, 72), onNext(510, 76), onNext(560, 32), onNext(570, -100), onNext(580, -3), onNext(590, 5), onNext(630, 10), onCompleted(690));
    results = scheduler.startWithCreate(function () {
        return xs.skip(0);
    });
    results.messages.assertEqual(onNext(210, 9), onNext(230, 13), onNext(270, 7), onNext(280, 1), onNext(300, -1), onNext(310, 3), onNext(340, 8), onNext(370, 11), onNext(410, 15), onNext(415, 16), onNext(460, 72), onNext(510, 76), onNext(560, 32), onNext(570, -100), onNext(580, -3), onNext(590, 5), onNext(630, 10), onCompleted(690));
    xs.subscriptions.assertEqual(subscribe(200, 690));
});

test('Skip_Error_After', function () {
    var ex, results, scheduler, xs;
    ex = 'ex';
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(70, 6), onNext(150, 4), onNext(210, 9), onNext(230, 13), onNext(270, 7), onNext(280, 1), onNext(300, -1), onNext(310, 3), onNext(340, 8), onNext(370, 11), onNext(410, 15), onNext(415, 16), onNext(460, 72), onNext(510, 76), onNext(560, 32), onNext(570, -100), onNext(580, -3), onNext(590, 5), onNext(630, 10), onError(690, ex));
    results = scheduler.startWithCreate(function () {
        return xs.skip(20);
    });
    results.messages.assertEqual(onError(690, ex));
    xs.subscriptions.assertEqual(subscribe(200, 690));
});

test('Skip_Error_Same', function () {
    var ex, results, scheduler, xs;
    ex = 'ex';
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(70, 6), onNext(150, 4), onNext(210, 9), onNext(230, 13), onNext(270, 7), onNext(280, 1), onNext(300, -1), onNext(310, 3), onNext(340, 8), onNext(370, 11), onNext(410, 15), onNext(415, 16), onNext(460, 72), onNext(510, 76), onNext(560, 32), onNext(570, -100), onNext(580, -3), onNext(590, 5), onNext(630, 10), onError(690, ex));
    results = scheduler.startWithCreate(function () {
        return xs.skip(17);
    });
    results.messages.assertEqual(onError(690, ex));
    xs.subscriptions.assertEqual(subscribe(200, 690));
});

test('Skip_Error_Before', function () {
    var ex, results, scheduler, xs;
    ex = 'ex';
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(70, 6), onNext(150, 4), onNext(210, 9), onNext(230, 13), onNext(270, 7), onNext(280, 1), onNext(300, -1), onNext(310, 3), onNext(340, 8), onNext(370, 11), onNext(410, 15), onNext(415, 16), onNext(460, 72), onNext(510, 76), onNext(560, 32), onNext(570, -100), onNext(580, -3), onNext(590, 5), onNext(630, 10), onError(690, ex));
    results = scheduler.startWithCreate(function () {
        return xs.skip(3);
    });
    results.messages.assertEqual(onNext(280, 1), onNext(300, -1), onNext(310, 3), onNext(340, 8), onNext(370, 11), onNext(410, 15), onNext(415, 16), onNext(460, 72), onNext(510, 76), onNext(560, 32), onNext(570, -100), onNext(580, -3), onNext(590, 5), onNext(630, 10), onError(690, ex));
    xs.subscriptions.assertEqual(subscribe(200, 690));
});

test('Skip_Dispose_Before', function () {
    var results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(70, 6), onNext(150, 4), onNext(210, 9), onNext(230, 13), onNext(270, 7), onNext(280, 1), onNext(300, -1), onNext(310, 3), onNext(340, 8), onNext(370, 11), onNext(410, 15), onNext(415, 16), onNext(460, 72), onNext(510, 76), onNext(560, 32), onNext(570, -100), onNext(580, -3), onNext(590, 5), onNext(630, 10));
    results = scheduler.startWithDispose(function () {
        return xs.skip(3);
    }, 250);
    results.messages.assertEqual();
    xs.subscriptions.assertEqual(subscribe(200, 250));
});

test('Skip_Dispose_After', function () {
    var results, scheduler, xs;
    scheduler = new TestScheduler();
    xs = scheduler.createHotObservable(onNext(70, 6), onNext(150, 4), onNext(210, 9), onNext(230, 13), onNext(270, 7), onNext(280, 1), onNext(300, -1), onNext(310, 3), onNext(340, 8), onNext(370, 11), onNext(410, 15), onNext(415, 16), onNext(460, 72), onNext(510, 76), onNext(560, 32), onNext(570, -100), onNext(580, -3), onNext(590, 5), onNext(630, 10));
    results = scheduler.startWithDispose(function () {
        return xs.skip(3);
    }, 400);
    results.messages.assertEqual(onNext(280, 1), onNext(300, -1), onNext(310, 3), onNext(340, 8), onNext(370, 11));
    xs.subscriptions.assertEqual(subscribe(200, 400));
});