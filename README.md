# Where I am

- API requests have been partitioned in /api directory. Each file name begins with `query...`
- Functions which generate the `Contributor` object and which rely on api requests are stored in the /functions directory and file names are prepended with `get...`
- The API functions are complete: one for getting user events and one for confirming that user exists. All data necessary can be sourced from these.
- The next step is to complete the `getContributionFrequencies` function which will return an object of shape `IContributionsFrequency`, this is a field on the `IContributor` type
- Then a function well be needed that returns a data object of `IContributorEvents` shape. This will be used to populate the pictograph and will also provide the details needed when the user clicks on one of the pictograph squares

The general architecture is: all data is will be contained within the `IContributor` object type. This is populated from the functions in `/functions`. This data will be split and passed as props to the subcomponents within the `DataCard` component.

# To do, return to

- Contributions API
  - Ensure user id matches committer id
  - Find per page parameter for `userCommits`

# Vars

`contributorData` = variable holding data of type `IContributor`
