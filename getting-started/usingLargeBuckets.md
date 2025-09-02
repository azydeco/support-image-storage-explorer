# Working with buckets containing lots of objects

If you are adding a large bucket containing more than 1000 objects it is recommended that you use a prefix otherwise loading will be slow.

You can enter a prefix when adding a provider before creating it. This will cause the extension to only fetch objects in your bucket with keys that begin with your prefix.
