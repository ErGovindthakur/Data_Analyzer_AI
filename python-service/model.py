from sklearn.linear_model import LinearRegression # type: ignore

def predict(df):
    if len(df.columns) < 2:
        return "Not enough data"

    X = df.iloc[:, :-1].values
    y = df.iloc[:, -1].values

    model = LinearRegression()
    model.fit(X, y)

    return float(model.predict(X[:1])[0])