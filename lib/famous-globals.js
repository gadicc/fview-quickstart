// Probably some other stuff should go here :)

Transform = null;

FView.ready(function() {
	Transform = famous.core.Transform;

	if (Package['raix:famono']) {
		// load famous shims and CSS
	  famous.polyfills;
	  famous.core.famous;
	}
});